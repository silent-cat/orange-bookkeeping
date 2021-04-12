import Layout from 'components/Layout'
import styled from 'styled-components'
import { TagsSection } from './Money/TagsSection'
import { NoteSection } from './Money/NoteSection'
import { CategorySection } from './Money/CategorySection'
import { NumberPadSection } from './Money/NumberPadSection'
import { useState } from 'react'
import { useRecords } from 'hooks/useRecords'
const MyLayout = styled(Layout)`
display:flex;
flex-direction:column;
`
const CategoryWrapper = styled.div`
background-color: #ebedf3;
`
const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
}

type Category = '-' | '+'
function Money() {
    const [selected, setSelected] = useState(defaultFormData)
    const { addRecord } = useRecords()

    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }
    const submit = () => {
        console.log(1111);

        if (addRecord(selected)) {
            alert('保存成功')
        }

        setSelected(defaultFormData)
    }
    return (
        <MyLayout scrollTop={9999}>
            <TagsSection value={selected.tagIds} onChange={tagIds => onChange({ tagIds })} />
            <NoteSection value={selected.note} onChange={note => { onChange({ note }) }} />
            <CategoryWrapper><CategorySection value={selected.category} onChange={category => { onChange({ category }) }} /></CategoryWrapper>
            <NumberPadSection value={selected.amount} onChange={amount => { onChange({ amount }) }} onOK={submit}/>
        </MyLayout>
    )
}

export default Money