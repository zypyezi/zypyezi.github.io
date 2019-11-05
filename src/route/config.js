import {jsData} from 'SRC/document/JS'
import {vueData} from 'SRC/document/Vue'
import {MQData} from 'SRC/document/MobileQuestion'
import {ReactData} from 'SRC/document/React'

import {webpackData} from 'SRC/document/Webpack'

export const summary = [
    {
        ...jsData
    },
    {
        ...vueData
    },
    {
        ...MQData
    },
    {
        ...ReactData
    },
    {
        ...webpackData
    }
]


