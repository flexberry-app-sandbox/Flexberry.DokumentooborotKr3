export default {
  projections: {
    ТЧСоздДокE: {
      формаДокумента: {
        __caption__: 'Наименование документа',
        наименование: {
          __caption__: 'Наименование документа'
        },
        содержание: {
          __caption__: 'Описание'
        },
        авПользователи: {
          __caption__: '',
          сотрудники: {
            __caption__: '',
            фИОСотрудника: {
              __caption__: 'Ответственный'
            }
          }
        }
      }
    }
  },
  validations: {
    формаДокумента: {
      __caption__: 'Наименование документа'
    },
    хрДок: {
      __caption__: 'хрДок'
    }
  }
};
