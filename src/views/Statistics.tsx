import styled from 'styled-components'
import dayjs from 'dayjs'
import Layout from 'components/Layout'
import { CategorySection } from './Money/CategorySection'
import { ReactNode, useState } from 'react'
import { useRecords, RecordItem } from 'hooks/useRecords'
import { useTags } from 'hooks/useTags'
const CategoryWrapper = styled.div`
background-color: #fff;
`
const Item = styled.div`
font-size:18px;
padding:10px 16px;
line-height:20px;
background:#fff;
display:flex;
justify-content:space-between;
>.note{
    /* margin-right:auto; */
    margin-left:16px;
    color:#999;
    flex-grow:1;
}
`
const Statistics = function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-')
    const { records } = useRecords()
    const { getName } = useTags()
    const hash: { [K: string]: RecordItem[] } = {}// {'2021-04-11':[item,item]}
    const selectedRecords = records.filter(r => r.category === category)

    selectedRecords.forEach(r => {
        const key = dayjs(r.createdAt).format('YYYY-MM-DD')
        if (!(key in hash)) {
            hash[key] = []
        }
        hash[key].push(r)
    })
    // console.log(Object.entries(hash));//Object.entries把对象变成数组
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0
        if (a[0] > b[0]) return 1
        if (a[0] < b[0]) return -1
        return 0
    })
    console.log(array);

    return (
        <Layout>
            <CategoryWrapper><CategorySection value={category} onChange={value => { setCategory(value) }} /></CategoryWrapper>
            {array.map(([date,records]) => (
                <div>
                    <header>{date}</header>

                    <div>
                        {records.map(r => {
                            return (
                                <Item>
                                    <div className="ellipsis">
                                    {
                                    r.tagIds
                                    .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                                    .reduce((res,span,index,arr)=>
                                    res.concat([index<arr.length-1?[span, ',']:[span]]),[] as ReactNode[])
                                    }
                                    </div>
                                    
                                    {r.note && <div className="note">{r.note}</div>}
                                    <div>￥{r.amount}</div>
                                    {/* <div>{dayjs(r.createdAt).format('YYYY年MM月DD日')}</div> */}
                                </Item>
                            )
                        })}
                    </div>
                </div>
            ))}
        </Layout>

    )
}

export default Statistics