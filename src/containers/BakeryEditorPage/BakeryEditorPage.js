import React from 'react';
import config from '../../config';
import {StaticPage, TopbarContainer} from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';
import css from '../AboutPage/AboutPage.module.css';
import {FormattedMessage} from '../../util/reactIntl';
import image from '../AboutPage/bakery.jpg';
import {twitterPageURL} from '../../util/urlHelpers';

const BakeryEditorPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);



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
          <p>Test</p>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>



      );
      };


export default BakeryEditorPage;

