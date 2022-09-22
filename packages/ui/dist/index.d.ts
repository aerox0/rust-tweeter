import { ComponentType, ComponentProps } from 'react';

interface NavSidebarProps {
    children: React.ReactNode;
    className?: string;
}
declare const NavSidebar: React.FC<NavSidebarProps>;

interface InfoSidebarProps {
    children: React.ReactNode;
}
declare const InfoSidebar: React.FC<InfoSidebarProps>;

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
    className?: string;
}
declare const Button: React.FC<ButtonProps>;

interface AvatarProps {
    size?: string;
}
declare const Avatar: React.FC<AvatarProps>;

interface TagInfoProps {
    name: string;
    count: string;
}
declare const TagInfo: React.FC<TagInfoProps>;

interface RoundedBlockProps {
    title: string;
    children: React.ReactNode;
}
declare const RoundedBlock: React.FC<RoundedBlockProps>;

interface InlineFollowProps {
    name: string;
    username: string;
}
declare const InlineFollow: React.FC<InlineFollowProps>;

interface RoundedInputProps {
    Icon?: ComponentType<ComponentProps<'svg'>>;
    className?: string;
    placeholder?: string;
}
declare const RoundedInput: React.FC<RoundedInputProps>;

export { Avatar, Button, InfoSidebar, InlineFollow, Logo, NavItem, NavSidebar, Post, RoundedBlock, RoundedInput, TagInfo, TweetPost };
