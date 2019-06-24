let soA
let soB
let soC
soA = prompt("Vật lý")
soB = prompt("Hóa Học")
soC = prompt("Sinh Học")
let A = parseFloat(soA)
let B =parseFloat(soB)
let C = parseFloat(soC)
let D = parseFloat((A+B+C)/3)
document.write("Điểm trung bình = " +(D.toFixed(2)))
document.write('<br/>')
document.write("Tổng điểm = " +(A+B+C))