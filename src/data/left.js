import {
  urlReg
} from '../assets/scripts/tool/utils'

import Mock from 'mockjs'

const data = () => {
  Mock.mock(urlReg('/iot/overview/alarm'), {
    'code': 1,
    'msg': 'success',
    'result': {
      'diandongche': {
        'lastyear': '@natural(1,2000)',
        'thisyear': '@natural(1,2000)',
        'huanbi': '@integer(-100,100)'
      },
      'caseResolved|3': [{
        'name|+1': ['部门一', '部门二', '部门三'],
        'value': '@natural(1,2000)'
      }]
    }
  })
}
export default data
