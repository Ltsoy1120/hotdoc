export interface ISidebarMenuItem {
  id: string
  title: string
  link: string
  icon?: string
  endIcon?: boolean
  count?: number | null
  subMenu?: ISidebarMenuItem[]
  parentId?: string
}

export const sidebarMenuList: ISidebarMenuItem[] = [
  {
    id: "1",
    title: "Входящие",
    link: "/documents/inbox",
    icon: "inbox",
    subMenu: [
      {
        id: "9",
        title: "На подписи",
        link: "/documents/inbox/to-sign",
        count: null
      },
      {
        id: "10",
        title: "На согласовании",
        link: "/documents/inbox/for-approval",
        count: null
      },
      {
        id: "11",
        title: "Подписанные",
        link: "/documents/inbox/signed",
        count: null
      }
    ]
  },
  {
    id: "2",
    title: "Отправленные",
    link: "/documents/sent",
    icon: "upload",
    subMenu: [
      {
        id: "12",
        title: "На подписи",
        link: "/documents/sent/to-sign",
        count: null
      },
      {
        id: "13",
        title: "На согласовании",
        link: "/documents/sent/for-approval",
        count: null
      },
      {
        id: "14",
        title: "Подписанные",
        link: "/documents/sent/signed",
        count: null
      }
    ]
  },
  {
    id: "3",
    title: "Архив действий",
    link: "/action-archive",
    icon: "bell"
  },
  {
    id: "4",
    title: "Мои папки",
    link: "/folders",
    icon: "folder"
  },
  {
    id: "5",
    title: "Общие документы",
    link: "/documents/general",
    icon: "link-2"
  },
  {
    id: "6",
    title: "Шаблоны",
    link: "/templates",
    icon: "file-text"
  },
  {
    id: "7",
    title: "Черновики",
    link: "/documents/drafts",
    icon: "archive"
  },
  {
    id: "8",
    title: "Контрагенты и сотрудники",
    link: "/employees",
    icon: "users",
    subMenu: [
      {
        id: "15",
        title: "Сотрудники",
        link: "/employees",
        count: null
      },
      {
        id: "16",
        title: "Контрагенты",
        link: "/contragents",
        count: null
      }
    ]
  }
]
