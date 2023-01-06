const bcryptjs = require('bcryptjs');

module.exports = {

  async up(queryInterface) {
    try {
      await queryInterface.bulkInsert(
        'users',
        [
          {
            nome: 'Rosa',
            email: 'rosa@email.com',
            password_hash: await bcryptjs.hash('123456', 8),
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            nome: 'André',
            email: 'andre@email.com',
            password_hash: await bcryptjs.hash('23467454', 8),
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            nome: 'Mariana',
            email: 'mariana@email.com',
            password_hash: await bcryptjs.hash('esd3434', 8),
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        {},
      );
    } catch (e) {
      console.log(e);
    }
  },

  down() {},
};
