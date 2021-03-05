//containers
import React from 'react';
import {StaticPage, TopbarContainer} from '../../containers';
import {
  Footer,
  LayoutSingleColumn, LayoutWrapperFooter,
  LayoutWrapperMain,
  LayoutWrapperTopbar,
  Imprint
} from '../../components';
import css from '../AboutPage/AboutPage.module.css';

const ImprintPage = () => {

  return <StaticPage
    title="Impressum | Let's Bake"
    schema={{
      '@context': 'http://schema.org',
      '@type': 'ImprintPage',
      description: 'Impressum',
      name: 'Impressum'
    }
    }

><LayoutSingleColumn>
    <LayoutWrapperTopbar>
      <TopbarContainer />
    </LayoutWrapperTopbar>

    <LayoutWrapperMain className={css.staticPageWrapper}>
      <Imprint/>
    </LayoutWrapperMain>

    <LayoutWrapperFooter>
      <Footer />
    </LayoutWrapperFooter>
  </LayoutSingleColumn>
  </StaticPage>
}

export default ImprintPage;
