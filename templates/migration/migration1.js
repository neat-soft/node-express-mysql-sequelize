// 'use strict';
//
// const replaceEnum = require('sequelize-replace-enum-postgres').default;
//
// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return replaceEnum({
//       tableName: 'profiles',
//       columnName: 'verifyStatus',
//       enumName: 'enum_profiles_verifyStatus',
//       defaultValue: 'CREATED_PROFILE',
//       newValues: [
//         'CREATED_PROFILE',
//         'CLAIMED_PROFILE',
//         'SUBMITED_DOCUMENT',
//         'VERIFIED_IDENTITY',
//         'VERIFIED_WORK',
//         'ACCESSED_ARTIST',
//         'CHECKED_ARTIST_NAME',
//         'VERIFIED_ARTIST',
//         'FINALIZED'
//       ],
//       queryInterface
//     });
//   },
//
//   down: (queryInterface, Sequelize) => {
//     return replaceEnum({
//       tableName: 'profiles',
//       columnName: 'verifyStatus',
//       enumName: 'enum_profiles_verifyStatus',
//       defaultValue: 'CREATED_PROFILE',
//       newValues: [
//         'CREATED_PROFILE',
//         'CLAIMED_PROFILE',
//         'SUBMITED_DOCUMENT',
//         'VERIFIED_IDENTITY',
//         'VERIFIED_WORK',
//         'ACCESSED_ARTIST',
//         'CHECKED_ARTIST_NAME',
//         'VERIFIED_ARTIST',
//         'FINALIZED'
//       ],
//       queryInterface
//     });
//   }
// };
