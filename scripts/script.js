const apiControllers = [
  {
    name: "AnswerOptionsController",
    methods: [
      { type: "GET", path: "/api/answeroptions", desc: "Получить все варианты ответов" },
      { type: "GET", path: "/api/answeroptions/{id}", desc: "Получить вариант ответа по ID" },
      { type: "POST", path: "/api/answeroptions", desc: "Создать новый вариант ответа" },
      { type: "PUT", path: "/api/answeroptions/{id}", desc: "Обновить вариант ответа по ID" },
      { type: "DELETE", path: "/api/answeroptions/{id}", desc: "Удалить вариант ответа по ID" },
    ],
  },
  {
    name: "AuditLogsController",
    methods: [
      { type: "GET", path: "/api/auditlogs", desc: "Получить все записи аудита" },
      { type: "GET", path: "/api/auditlogs/{id}", desc: "Получить запись аудита по ID" },
      { type: "POST", path: "/api/auditlogs", desc: "Создать новую запись аудита" },
      { type: "PUT", path: "/api/auditlogs/{id}", desc: "Обновить запись аудита по ID" },
      { type: "DELETE", path: "/api/auditlogs/{id}", desc: "Удалить запись аудита по ID" },
    ],
  },
  {
    name: "AuthController",
    methods: [
      { type: "POST", path: "/api/auth/login", desc: "Авторизация пользователя" },
      { type: "GET", path: "/api/auth/me", desc: "Получить данные текущего пользователя (требует авторизацию)" },
    ],
  },
  {
    name: "CoursesController",
    methods: [
      { type: "GET", path: "/api/courses", desc: "Получить все курсы" },
      { type: "GET", path: "/api/courses/{id}", desc: "Получить курс по ID" },
      { type: "POST", path: "/api/courses", desc: "Создать новый курс" },
      { type: "PUT", path: "/api/courses/{id}", desc: "Обновить курс по ID" },
      { type: "DELETE", path: "/api/courses/{id}", desc: "Удалить курс по ID" },
    ],
  },
  {
    name: "EmployeesController",
    methods: [
      { type: "GET", path: "/api/employees", desc: "Получить всех сотрудников" },
      { type: "GET", path: "/api/employees/{id}", desc: "Получить сотрудника по ID" },
      { type: "GET", path: "/api/employees/me", desc: "Получить данные текущего сотрудника" },
      { type: "POST", path: "/api/employees", desc: "Создать нового сотрудника" },
      { type: "PUT", path: "/api/employees/{id}", desc: "Обновить сотрудника по ID" },
      { type: "DELETE", path: "/api/employees/{id}", desc: "Удалить сотрудника по ID" },
    ],
  },
  {
    name: "QuestionsController",
    methods: [
      { type: "GET", path: "/api/questions", desc: "Получить все вопросы" },
      { type: "GET", path: "/api/questions/{id}", desc: "Получить вопрос по ID" },
      { type: "POST", path: "/api/questions", desc: "Создать новый вопрос" },
      { type: "PUT", path: "/api/questions/{id}", desc: "Обновить вопрос по ID" },
      { type: "DELETE", path: "/api/questions/{id}", desc: "Удалить вопрос по ID" },
    ],
  },
  {
    name: "ReportsController",
    methods: [
      { type: "GET", path: "/api/reports", desc: "Получить все отчёты" },
      { type: "GET", path: "/api/reports/{id}", desc: "Получить отчёт по ID" },
      { type: "POST", path: "/api/reports", desc: "Создать новый отчёт" },
      { type: "PUT", path: "/api/reports/{id}", desc: "Обновить отчёт по ID" },
      { type: "DELETE", path: "/api/reports/{id}", desc: "Удалить отчёт по ID" },
    ],
  },
  {
    name: "RolesController",
    methods: [
      { type: "GET", path: "/api/roles", desc: "Получить все роли" },
      { type: "GET", path: "/api/roles/{id}", desc: "Получить роль по ID" },
      { type: "POST", path: "/api/roles", desc: "Создать новую роль" },
      { type: "PUT", path: "/api/roles/{id}", desc: "Обновить роль по ID" },
      { type: "DELETE", path: "/api/roles/{id}", desc: "Удалить роль по ID" },
    ],
  },
  {
    name: "TestAttemptsController",
    methods: [
      { type: "GET", path: "/api/testattempts", desc: "Получить все попытки тестов" },
      { type: "GET", path: "/api/testattempts/{id}", desc: "Получить попытку теста по ID" },
      { type: "POST", path: "/api/testattempts", desc: "Создать новую попытку теста" },
      { type: "PUT", path: "/api/testattempts/{id}", desc: "Обновить попытку теста по ID" },
      { type: "DELETE", path: "/api/testattempts/{id}", desc: "Удалить попытку теста по ID" },
    ],
  },
  {
    name: "TestsController",
    methods: [
      { type: "GET", path: "/api/tests", desc: "Получить все тесты" },
      { type: "GET", path: "/api/tests/{id}", desc: "Получить тест по ID" },
      { type: "POST", path: "/api/tests", desc: "Создать новый тест" },
      { type: "PUT", path: "/api/tests/{id}", desc: "Обновить тест по ID" },
      { type: "DELETE", path: "/api/tests/{id}", desc: "Удалить тест по ID" },
    ],
  },
  {
    name: "TrainingMaterialsController",
    methods: [
      { type: "GET", path: "/api/trainingmaterials", desc: "Получить все материалы обучения" },
      { type: "GET", path: "/api/trainingmaterials/{id}", desc: "Получить материал обучения по ID" },
      { type: "POST", path: "/api/trainingmaterials", desc: "Создать новый материал обучения" },
      { type: "PUT", path: "/api/trainingmaterials/{id}", desc: "Обновить материал обучения по ID" },
      { type: "DELETE", path: "/api/trainingmaterials/{id}", desc: "Удалить материал обучения по ID" },
    ],
  },
];

function createCard(controller) {
  const card = document.createElement('div');
  card.className = 'card';

  const title = document.createElement('h3');
  title.textContent = controller.name;
  card.appendChild(title);

  controller.methods.forEach((method) => {
    const p = document.createElement('p');
    p.innerHTML = `<strong>${method.type}</strong> ${method.path} — ${method.desc}`;
    card.appendChild(p);
  });

  return card;
}

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('api-cards');
  apiControllers.forEach(controller => {
    container.appendChild(createCard(controller));
  });
});
