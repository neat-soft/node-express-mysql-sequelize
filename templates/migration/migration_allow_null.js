// 'use strict';

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.describeTable('balances')
//       .then(table => {
//         if (table.userId) {
//           return queryInterface.changeColumn(
//             'balances',
//             'userId',
//             {
//               type: Sequelize.STRING,
//               allowNull: true,
//               onDelete: 'SET NULL'
//             }
//           );
//         }
//         return undefined;
//       });
//   },

//   down: (queryInterface, Sequelize) => {
//     return queryInterface.describeTable('balances')
//       .then(table => {
//         if (table.userId) {
//           return queryInterface.changeColumn(
//             'balances',
//             'userId',
//             {
//               type: Sequelize.STRING,
//               allowNull: false,
//               references: {
//                 model: 'users',
//                 key: 'id'
//               },
//             }
//           );
//         }
//         return undefined;
//       });
//   }
// };
