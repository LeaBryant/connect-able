import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import SkillsList from '../components/SkillsList';
// import SkillForm from '../components/SkillForm';

import { QUERY_USERS } from '../utils/queries';

const User = () => {
  const { userId } = useParams();

  const { loading, data } = useQuery(QUERY_USERS, {
    variables: { userId: userId },
  });

  const users = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="card-header">
        {/* {profile.name}'s friends have endorsed these skills... */}
      </h2>

      {/* {profile.skills?.length > 0 && <SkillsList skills={profile.skills} />} */}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <SkillForm profileId={user._id} />
      </div>
    </div>
  );
};

export default Profile;
