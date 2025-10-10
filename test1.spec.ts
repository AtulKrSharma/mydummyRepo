test('RT-57172 - API-Admin user should not have advanced permission privileges', {tag: ['@release', '@api']}, async ({dataGen}) => {
  // 1. Admin user (no advanced permissions)
  const adminEmail = dataGen.generateEmail(1)
  const adminUserId = await UsersApi.createUser({
    first: dataGen.generateFirstName(1),
    last: dataGen.generateLastName(1),
    email: adminEmail,
    isAdmin: true,
  })