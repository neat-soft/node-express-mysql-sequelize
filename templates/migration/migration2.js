// module.exports = {
//   up(queryInterface, Sequelize) {
//     return queryInterface.describeTable('profiles')
//       .then(table => {
//         if (!table.verifyStatus) {
//           return queryInterface.addColumn('profiles', 'verifyStatus', {
//             type: Sequelize.ENUM('SELECTED_PROFILE', 'CONFIRMED_INFORMATION',
//               'CLAIMED_PROFILE', 'VERIFIED_IDENTITY', 'VERIFIED_WORK', 'FINALIZED')
//           });
//           // return [
//           //   queryInterface.addColumn(
//           //     'users',
//           //     'email',
//           //     {
//           //       type: Sequelize.STRING,
//           //       allowNull: false
//           //     }
//           //   ),
//           //   queryInterface.addColumn(
//           //     'users',
//           //     'encryptedPassword',
//           //     {
//           //       type: Sequelize.STRING,
//           //       allowNull: false
//           //     }
//           //   )
//           // ];
//         }
//         return undefined;
//       });
//   },
//   down(queryInterface, Sequelize) {
//     return queryInterface.describeTable('profiles')
//       .then(table => {
//         if (table.verifyStatus) {
//           return queryInterface.removeColumn('profiles', 'verifyStatus');
//           // return [
//           //   queryInterface.removeColumn('users', 'email'),
//           //   queryInterface.removeColumn('users', 'encryptedPassword')
//           // ];
//         }
//         return undefined;
//       });
//   },
// };
