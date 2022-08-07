import { FC, PropsWithChildren } from 'react';
import { StyledLinkCell } from './styles';

type Props = PropsWithChildren<{ href: string }>

export const LinkCell: FC<Props> = ({ href, children }) => {
    return (
        <StyledLinkCell href={href} target='_blank'>{children}</StyledLinkCell>
    );
}
