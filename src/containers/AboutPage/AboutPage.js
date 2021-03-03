import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.module.css';
import image from './bakery.jpg';
import {FormattedMessage} from '../../util/reactIntl';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore

  //TODO INSTAGRAM HINZUFÜGEN
  return (
    <StaticPage
      title="Über uns | Let's Bake"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Let\'s Bake',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}><FormattedMessage id="AboutPage.title" /></h1>
          <img className={css.coverImage} src={image} alt="Let's Bake" />


          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <h3><FormattedMessage id="AboutPage.factCaption" /></h3>
              <p><FormattedMessage id="AboutPage.caption" /></p>
            </div>
            <div className={css.contentMain}>

              <h2><FormattedMessage id="AboutPage.contentMainCaption" /></h2>

              <p><FormattedMessage id="AboutPage.contentMainText" /> <b>DANKE</b> &#x2764;</p>

              <h3 className={css.subtitle}><FormattedMessage id="AboutPage.contentTeamCaption" /></h3>

              <p><FormattedMessage id="AboutPage.contentTeamText" /> <b>Let's Bake!</b>
              </p>

              <p>
                <FormattedMessage id="AboutPage.findUs"/>{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink>  <FormattedMessage id="AboutPage.findUsPartTwo"/>{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink> und

              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
