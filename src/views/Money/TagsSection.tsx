import styled from 'styled-components'
import React, { } from 'react'
import { useTags } from 'hooks/useTags'
const Wrapper = styled.section`
background-color:#fff;
padding:12px 16px;
display:flex;
flex-grow:1;
flex-direction:column;
justify-content:flex-end;
align-items:flex-start;
>ol{
    margin:0 -12px;
    >li{
        background-color:#d9d9d9;
        display:inline-block;
        border-radius:12px;
        padding:4px 18px;
        font-size:14px;
        margin: 8px 12px;
        &.selected{
            background-color: red;
        }
    }
}
> button{
    background:none;
    border:none;
    border-bottom: 1px solid #333;
    padding: 0px 4px;
    color:#666;
    outline:none;
}
`
type Props = {
    value: number[]
    onChange: (selected:number[]) => void
}
// 将Styled Component改成 Function Component
const TagsSection: React.FunctionComponent<Props> = (props) => {
    const {tags,addTag} = useTags()
    const selectedTagIds = props.value


    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId)
        if (index >= 0) {
            props.onChange(selectedTagIds.filter(t => t !== tagId))
        } else {
            props.onChange([...selectedTagIds, tagId])
        }
    }
    const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : ''
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag.id} onClick={() => onToggleTag(tag.id)} className={getClass(tag.id)}>{tag.name}</li>)}
            </ol>
            
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )

}
export { TagsSection }