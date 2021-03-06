import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import ActivityInfo from '../../components/activity/activityInfo';
import Footer from '../../components/footer';
import buildHeader from '../../components/header';
import SubHeader from '../../components/subHeader';
import css from '../templateCSS';

const activityAssignedEmail = async (activity, user, imageUrl) => {
  try {
    const Header = await buildHeader(imageUrl);
    return renderEmail(
      <Email title="You have been Assigned" headCSS={css}>
        <Header />
        <SubHeader subText="You have been" header="Assigned" message="A new Activity" />
        <ActivityInfo {...user} {...activity} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default activityAssignedEmail;
