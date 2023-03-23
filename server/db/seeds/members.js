/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('members').del()
  await knex('members').insert([
    { id: 99, name: 'Drake', group: null },
    { id: 10, name: 'Olivia', group: null },
    { id: 100, name: 'Jordan', group: null },
    { id: 1000, name: 'Peter', group: null },
    { id: 10000, name: 'Doug', group: null },
    { id: 2, name: 'Getrude', group: null },
    { id: 22, name: 'Benson', group: null },
    { id: 3, name: 'Hedges', group: null },
    { id: 5, name: 'Gerard', group: null },
    { id: 33, name: 'Carmen', group: null },
    { id: 4, name: 'Simon', group: null },
    { id: 12, name: 'Garfunkel', group: null },
    { id: 234, name: 'Key', group: null },
    { id: 55, name: 'Peele', group: null },
    { id: 69, name: 'Eric', group: null },
    { id: 345, name: 'Andre', group: null },
    { id: 5555, name: 'Jonah', group: null },
    { id: 9, name: 'Eugene', group: null },
    { id: 1, name: 'Patchy', group: null },
    { id: 16, name: 'Josephine', group: null },
    { id: 160, name: 'Courage', group: null },
    { id: 490, name: 'Human Skills', group: null },
    { id: 420, name: 'Casper', group: null },
    { id: 840, name: 'Allen', group: null },
    { id: 550, name: 'Other Allen', group: null },
    { id: 60, name: 'John B', group: null },
    { id: 2130, name: 'Kanban', group: null },
    { id: 4120, name: 'Josephine', group: null },
    { id: 4220, name: 'Kenben', group: null },
    { id: 8880, name: 'Art', group: null },
  ])
}
