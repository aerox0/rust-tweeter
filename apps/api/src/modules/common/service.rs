use diesel::{
    associations::HasTable,
    helper_types::Find,
    query_builder::{AsQuery, DeleteStatement, InsertStatement, IntoUpdateTarget, UpdateStatement},
    query_dsl::{
        methods::{ExecuteDsl, FindDsl},
        LoadQuery,
    },
    AsChangeset, Insertable, PgConnection, RunQueryDsl, Table,
};

use crate::utils::database::PooledDb;

pub trait ListService<T, R>
where
    T: Table + HasTable<Table = T>,
    T: LoadQuery<'static, PgConnection, R>,
{
    fn list(mut conn: PooledDb) -> Result<Vec<R>, anyhow::Error> {
        let results = T::table().load::<R>(&mut conn)?;

        Ok(results)
    }
}

pub trait CreateService<T, I, R>
where
    T: Table + HasTable<Table = T>,
    I: Insertable<T> + Insertable<T::Table>,
    InsertStatement<T::Table, <I as Insertable<T::Table>>::Values>:
        LoadQuery<'static, PgConnection, R>,
{
    fn create(input: I, mut conn: PooledDb) -> Result<R, anyhow::Error> {
        let result = diesel::insert_into(T::table())
            .values(input)
            .get_result::<R>(&mut conn)?;

        Ok(result)
    }
}

type UpdateFindStatement<F, R> = UpdateStatement<
    <F as HasTable>::Table,
    <F as IntoUpdateTarget>::WhereClause,
    <R as AsChangeset>::Changeset,
>;

pub trait UpdateService<T, I, M>
where
    T: Table + HasTable<Table = T>,
    T: FindDsl<i32>,
    Find<T, i32>: IntoUpdateTarget,
    UpdateFindStatement<Find<T::Table, i32>, I>: LoadQuery<'static, PgConnection, M> + AsQuery,
    I: AsChangeset<Target = <<T as FindDsl<i32>>::Output as HasTable>::Table>,
{
    fn update(id: i32, input: I, mut conn: PooledDb) -> Result<M, anyhow::Error> {
        let find = T::table().find(id);
        let update = diesel::update(find).set(input);

        Ok(update.get_result::<M>(&mut conn)?)
    }
}

type DeleteFindStatement<F> =
    DeleteStatement<<F as HasTable>::Table, <F as IntoUpdateTarget>::WhereClause>;

pub trait DeleteService<T>
where
    T: Table + HasTable<Table = T>,
    T: FindDsl<i32>,
    Find<T, i32>: IntoUpdateTarget,
    DeleteFindStatement<Find<T, i32>>: ExecuteDsl<PgConnection>,
{
    fn delete(id: i32, mut conn: PooledDb) -> Result<usize, anyhow::Error> {
        let find = T::table().find(id);
        let delete = diesel::delete(find);

        Ok(delete.execute(&mut conn)?)
    }
}
