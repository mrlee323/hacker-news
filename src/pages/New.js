import React from 'react';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/images/new_banner.svg';

const NewBlcok = styled(Responsive)``;

const New = () => {
  return (
    <NewBlcok>
      <Banner />
    </NewBlcok>
  );
};

export default New;

// const TopBlock = styled(Responsive)`
//   .top {
//     background: ${({ theme }) => theme.bgColor};
//   }
// `;

// const Top = () => {
//   return (
//     <TopBlock>
//       <section className="top">
//         <img src={banner} alt="banner" style={{ width: '24.4rem' }} />
//         <Category />
//         <Mode />
//         {/* <Post />
//         <Users /> */}
//       </section>
//     </TopBlock>
//   );
// };
