interface NavSidebarProps {
    children: React.ReactNode;
    className?: string;
}
declare const NavSidebar: React.FC<NavSidebarProps>;

interface PostProps {
    name: string;
    username: string;
    hours_ago: string;
    children: React.ReactNode;
}
declare const Post: React.FC<PostProps>;

interface TweetPostProps {
    className?: string;
}
declare const TweetPost: React.FC<TweetPostProps>;

interface LogoProps {
}
declare const Logo: React.FC<LogoProps>;

interface NavItemProps {
    href?: string;
    children: React.ReactNode;
}
declare const NavItem: React.FC<NavItemProps>;

interface ButtonProps {
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;

interface AvatarProps {
}
declare const Avatar: React.FC<AvatarProps>;

export { Avatar, Button, Logo, NavItem, NavSidebar, Post, TweetPost };
