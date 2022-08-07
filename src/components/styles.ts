import styled from '@emotion/styled';

const pagePadding = '20px';
const primaryFontColor = '#313131';

export const RepositoryView = styled.div`
  padding: ${pagePadding};
  color: ${primaryFontColor};
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const DataGridWrapper = styled.div`
  height: calc(100vh - ${pagePadding} * 2);
  width: 602px;
`;

export const StyledLinkCell = styled.a`
  font-weight: 600;
  color: ${primaryFontColor};
  text-decoration: none;
`;
