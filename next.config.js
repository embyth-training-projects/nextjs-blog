const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "BlogAdmin",
        mongodb_password: "0zkXxi0H5hFOs3Ds",
        mongodb_cluster: "cluster0",
        mongodb_collection: "my-blog-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "BlogAdmin",
      mongodb_password: "0zkXxi0H5hFOs3Ds",
      mongodb_cluster: "cluster0",
      mongodb_collection: "my-blog",
    },
  };
};
