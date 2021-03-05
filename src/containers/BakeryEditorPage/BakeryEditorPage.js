// containers
import React from 'react';
import {StaticPage, TopbarContainer} from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  BakeryEditor,
} from '../../components';
import css from '../AboutPage/AboutPage.module.css';



const BakeryEditorPage = () => {


  return (
    <StaticPage
      title=" Bakery Editor | Let's Bake"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'BakeryPage',
        description: 'Backwaren-Editor',
        name: 'Backwaren Editor'
      }
      }
    >

      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <BakeryEditor/>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>



      );
      };


export default BakeryEditorPage;

