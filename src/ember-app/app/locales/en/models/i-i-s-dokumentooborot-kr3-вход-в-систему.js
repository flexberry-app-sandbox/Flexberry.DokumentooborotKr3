export default {
  projections: {
    ВходВСистемуE: {
      датаВхода: {
        __caption__: 'Дата входа'
      },
      тЧПользователь: {
        __caption__: 'Пользователь',
        авПользователи: {
          __caption__: 'ID Пользователя',
          сотрудники: {
            __caption__: '',
            фИОСотрудника: {
              __caption__: 'ФИО Сотрудника'
            }
          },
          логин: {
            __caption__: 'Логин'
          },
          пароль: {
            __caption__: 'Пароль'
          }
        }
      }
    },
    ВходВСистемуL: {
      датаВхода: {
        __caption__: 'Дата входа'
      }
    }
  },
  validations: {
    датаВхода: {
      __caption__: 'Дата входа'
    },
    тЧПользователь: {
      __caption__: 'Пользователь'
    }
  }
};
