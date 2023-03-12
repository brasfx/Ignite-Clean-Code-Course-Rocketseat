function updateUserRoute({ body: { name, email, password }, params: { id } }) {
  updateUserController({
    body: { name, email, password },
    params: { id },
  });
}

function updateUserController(
  data: { body: { name; email; password } },
  params: { id },
) {
  userRepository.update({
    data: { body: { name, email, password } },
    params: { id },
  });
}

const userRepository = {
  update: (data: { body: { name; email; password } }, params: { id }) => {},
};
