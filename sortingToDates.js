
const data = [
    { id: 1, fullName: "Быков Юрий", date: "2021-09-01" },
    { id: 12, fullName: "Ларионов Владимир", date: "2021-09-01" },
    { id: 56, fullName: "Мамонтов Панкрат", date: "2021-09-01" },
    { id: 1, fullName: "Быков Юрий", date: "2021-09-02" },
    { id: 56, fullName: "Мамонтов Панкрат", date: "2021-09-02" },
    { id: 1, fullName: "Быков Юрий", date: "2021-09-03" },
    { id: 1, fullName: "Быков Юрий", date: "2021-09-04" },
    { id: 1, fullName: "Быков Юрий", date: "2021-09-05" },
    { id: 1, fullName: "Быков Юрий", date: "2021-09-06" },
    { id: 12, fullName: "Ларионов Владимир", date: "2021-09-06" },
    { id: 12, fullName: "Ларионов Владимир", date: "2021-09-07" },
    { id: 12, fullName: "Ларионов Владимир", date: "2021-09-08" },
    { id: 12, fullName: "Ларионов Владимир", date: "2021-09-09" },
    { id: 56, fullName: "Мамонтов Панкрат", date: "2021-09-09" },
    { id: 12, fullName: "Ларионов Владимир", date: "2021-09-12" },
    { id: 12, fullName: "Ларионов Владимир", date: "2021-09-13" },
    { id: 56, fullName: "Мамонтов Панкрат", date: "2021-09-18" },
  ];

  for (let i = 0; i < data.length; i++) {
        let arr = []
        let first = data[i]
        let last = data[data.length - 1]
        for (let j = 0; j < data.length; j++) {
            if (first.id === data[j].id) {
                arr.push({
                    id: data[j].id,
                    fullName: data[i].fullName,
                    startDate: data[i]?.date,
                    endDate: data[j - 1]?.date ? data[j - 1]?.date : data[i]?.date
                })
                // arr.push(newObj)
                
                // arr.push({...first, ...data[j]})
            }
        }
        console.log(arr)
  }


  //   output
// [
//   {"id": 1, "fullName": "Быков Юрий", "startDate": "2021-09-01", "endDate": "2021-09-06"},
//   {"id": 12, "fullName": "Ларионов Владимир", "startDate": "2021-09-01", "endDate": "2021-09-01"},
//   {"id": 56, "fullName": "Мамонтов Панкрат", "startDate": "2021-09-01", "endDate": "2021-09-02"},
//   {"id": 12, "fullName": "Ларионов Владимир", "startDate": "2021-09-06", "endDate": "2021-09-09"},
//   {"id": 56, "fullName": "Мамонтов Панкрат", "startDate": "2021-09-09", "endDate": "2021-09-09"},
//   {"id": 12, "fullName": "Ларионов Владимир", "startDate": "2021-09-12", "endDate": "2021-09-13"},
//   {"id": 56, "fullName": "Мамонтов Панкрат", "startDate": "2021-09-18", "endDate": "2021-09-18"}
// ]