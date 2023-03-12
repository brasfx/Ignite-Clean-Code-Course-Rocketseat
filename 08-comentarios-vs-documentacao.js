async function userRegistration(data) {
  const { email, name, avatar } = data;

  const userNoHasAvatar = !avatar;
  const userNoHasName = !name;

  if (userNoHasAvatar) return { error: 'avatar is required' };

  if (userNoHasName) return { error: 'name is required' };

  const getUserMail = getUserByEmail(email);

  if (getUserMail) {
    return { error: 'email already used' };
  }

  // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
  // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
  const avatarConvertedToJPG = convertImageToJPG(avatar);

  const createNewUser = await createUser({
    email,
    name,
    avatar: avatarConvertedToJPG,
  });

  return { user: createNewUser };
}
