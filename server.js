const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
 
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
 
// 获取db数据
const db = require('./db.js')
 console.log(db.api_timelineItem_page)

server.use(jsonServer.rewriter({
    '/api/diary/page': '/api_diary_page',
    '/api/timelineItem/page': '/api_timelineItem_page',
    '/api/preference/sorted/3':'/api_preference_sorted_3',
    '/api/whyHowWhatCard/get/2':'/api_whyHowWhatCard_get_2',
    '/api/twoDimensionTable/get/2':'/api_twoDimensionTable_get_2',
    '/api/article/get/5':'/api_article_get_5',
    '/api/todo/67':'/api_todo_67',
    '/api/factOpinionCard/get/2':'/api_factOpinionCard_get_2'
}))

// Use router
server.use(jsonServer.router(db))
 
server.listen(9090, () => {
  console.log('JSON Server is running on 9090')
})
