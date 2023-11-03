/**
 * @description 获取本地时间
 */
export const useTime = () => {
  let year = 0 // 年份
  let month = 0 // 月份
  let week = '' // 星期几
  let day = 0 // 天数
  let hour = 0 // 小时
  let minute = 0 // 分钟
  let second = 0 // 秒
  let nowTime = '' // 当前时间

  // 更新时间
  const updateTime = () => {
    const date = new Date()
    year = date.getFullYear()
    month = date.getMonth() + 1
    week = '日一二三四五六'.charAt(date.getDay())
    day = date.getDate()
    month >= 1 && month <= 9 ? (month = "0" + month) : ""
    day >= 0 && day <= 9 ? (day = "0" + day) : ""
    hour =
      (date.getHours() + '')?.padStart(2, '0') ||
      new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(
        date.getHours()
      )
    minute =
      (date.getMinutes() + '')?.padStart(2, '0') ||
      new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(
        date.getMinutes()
      )
    second =
      (date.getSeconds() + '')?.padStart(2, '0') ||
      new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(
        date.getSeconds()
      )
    nowTime = `${year}年${month}月${day} ${hour}:${minute}:${second}`
  }

  updateTime()

  return { year, month, day, hour, minute, second, week, nowTime }
}
