# Travel Mary — лендинг

Готовый сайт для публикации на GitHub Pages (или любом хостинге статики).

## Как опубликовать на GitHub Pages

1. Создай новый репозиторий на GitHub (например, `travel-mary`).
2. Загрузи в него **всё содержимое этой папки** (файл `index.html`, папку `images/`,
   файлы `.jsx` и `.css`). Структуру папок менять нельзя — `index.html` и `images/`
   должны лежать рядом, как сейчас.
3. В репозитории открой **Settings → Pages**.
4. В разделе *Build and deployment* выбери источник **Deploy from a branch**,
   ветку `main` и папку `/ (root)`. Нажми **Save**.
5. Через 1–2 минуты сайт будет доступен по адресу
   `https://ТВОЙ-ЛОГИН.github.io/НАЗВАНИЕ-РЕПОЗИТОРИЯ/`.

GitHub Pages автоматически открывает `index.html` — переименовывать ничего не нужно.

## Превью при отправке ссылки (Open Graph)

Картинка-превью и описание уже настроены — лежат в `images/og-cover.jpg`
и в `<meta>`-тегах внутри `index.html`. Для большинства мессенджеров
(Telegram и др.) превью подтянется само.

Чтобы превью работало **на 100% во всех соцсетях** (Facebook, WhatsApp, X),
после того как узнаешь финальный адрес сайта:

1. Открой `index.html` в любом текстовом редакторе.
2. Найди блок `<!-- Open Graph / social share -->`.
3. Раскомментируй и впиши свой адрес в строку:
   `<meta property="og:url" content="https://ТВОЙ-ДОМЕН/" />`
4. (Опционально, для надёжности) замени относительные пути картинки
   на абсолютные — три места:
   - `<meta property="og:image" content="images/og-cover.jpg" />`
     → `content="https://ТВОЙ-ДОМЕН/images/og-cover.jpg"`
   - `<meta name="twitter:image" content="images/og-cover.jpg" />`
     → `content="https://ТВОЙ-ДОМЕН/images/og-cover.jpg"`
5. После обновления ссылки превью в соцсетях кешируется. Сбросить кеш можно
   в Telegram — написав ссылку боту `@WebpageBot`, в Facebook — через
   *Sharing Debugger* (developers.facebook.com/tools/debug).

## Что внутри

- `index.html` — страница (точка входа).
- `tm-*.jsx`, `flora.jsx`, `motion.jsx`, `tweaks-panel.jsx` — код интерфейса.
- `tm-styles.css` — стили.
- `images/` — все изображения, фавиконка и превью для соцсетей.

Для работы сайту нужен интернет (подгружаются шрифты Google Fonts и пара
фоновых фото) — на хостинге это не проблема.
