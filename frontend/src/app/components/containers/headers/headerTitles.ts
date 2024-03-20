export const getHeaderTitle = (pathName: string) => {
  const parts = pathName.split("/")
  const id = parts.slice(-1)[0]

  switch (pathName) {
    case "/profile":
      return {
        title: "Профиль",
        subtitle: ""
      }
    case "/profile/edit":
      return {
        title: "Редактирование профиля",
        subtitle: `
           <div class="subtitle">
           Обновите свои личные данные и фото профиля
           </div>
          `
      }
    case "/profile/company/edit":
      return {
        title: "Редактирование данных",
        subtitle: `
         <div class="subtitle">
          Дополните информацию про вашу организацию
         </div>
        `
      }
    case "/documents/new":
      return {
        title: "Новый документ",
        subtitle: `
       <div class="subtitle">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.99999 9.16667V14.1667M7.49999 11.6667H12.5M18.3333 15.8333C18.3333 16.2754 18.1577 16.6993 17.8452 17.0118C17.5326 17.3244 17.1087 17.5 16.6667 17.5H3.33332C2.8913 17.5 2.46737 17.3244 2.15481 17.0118C1.84225 16.6993 1.66666 16.2754 1.66666 15.8333V4.16667C1.66666 3.72464 1.84225 3.30072 2.15481 2.98816C2.46737 2.67559 2.8913 2.5 3.33332 2.5H7.49999L9.16666 5H16.6667C17.1087 5 17.5326 5.17559 17.8452 5.48816C18.1577 5.80072 18.3333 6.22464 18.3333 6.66667V15.8333Z" stroke="#FE6B13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Сохранен в <a href="/documents/drafts">Черновиках</a>
      </div>
       `
      }
    case "/documents/all":
      return {
        title: "Документы",
        subtitle: ""
      }
    case "/documents/inbox":
      return {
        title: "Входящие",
        subtitle: ""
      }
    case "/employees":
      return {
        title: "Сотрудники",
        subtitle: ""
      }
    case "/employees/new":
      return {
        title: "Сотрудники",
        subtitle: `
             <div class="subtitle">
              Добавьте сотрудников вашей компании
             </div>
            `
      }
    case `/employees/edit/${id}`:
      return {
        title: "Редактировать",
        subtitle: ""
      }
    case "/contragents":
      return {
        title: "Контрагенты",
        subtitle: ""
      }
    case "/contragents/new":
      return {
        title: "Контрагенты",
        subtitle: `
             <div class="subtitle">
             Добавленные контрагенты появится в списке подписантов 
             </div>
            `
      }
    case `/contragents/${id}`:
      return {
        title: "Профиль контрагента",
        subtitle: ""
      }
    case `/contragents/edit/${id}`:
      return {
        title: "Редактировать",
        subtitle: ""
      }
    default:
      break
  }
}
