
// dependencies

// module scaffolding
const environments = {};

environments.staging = {
    prot: 3000,
    envName: 'staging'
};

environments.production = {
    prot: 5000,
    envName: 'production'
};

// determine which environment was passed
const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';

// export crossponding evnvironment object
const environmentToExport = typeof(environments[currentEnvironment]) === 'object' ? typeof(environments[currentEnvironment]) : environments.staging;

module.exports = environmentToExport;