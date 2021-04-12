import React, { } from 'react'
import { useParams, useHistory } from 'react-router'
import { useTags } from 'hooks/useTags'
import styled from 'styled-components'
import Layout from 'components/Layout'
import Icon from 'components/Icon'
import Button from 'components/Button'
import Input from 'components/Input'

type Params = {
    id: string
}

const TopBar = styled.header`
display:flex;
justify-content:space-between;
align-items:center;
padding:12px;
background-color: #fff;
`
const InputWrapper = styled.div`
background-color: #fff;
padding:0 16px;
margin-top:12px;
`

const Deleted = styled.div`
text-align:center;
`
const Tag: React.FC = () => {
    const { findTag, updateTag, deleteTag } = useTags()
    let { id } = useParams<Params>()
    const tag = findTag(parseInt(id))
    const tagContent = (tag: { id: number, name: string }) => (
        <div>
            <InputWrapper>
                <Input
                    label="标签名"
                    type="text"
                    placeholder="标签名"
                    value={tag.name}
                    onChange={(e) => { updateTag(tag.id, { name: e.target.value }) }} />
            </InputWrapper>

            <div>
                <Button onClick={() => {
                    deleteTag(tag.id)
                }}>删除标签</Button>
            </div>
            <h1>{tag.name}</h1>
        </div>

    )

    const tagDeleted = (
        <Deleted>
            tag不存在
        </Deleted>
    )
    const history = useHistory()
    const onClickBack = () => {
        // window.history.back()
        history.goBack()

    }
    return (
        <Layout>
            <TopBar>
                <Icon name="left" onClick={onClickBack} />
                <span>编辑标签</span>
                <Icon />
            </TopBar>
            {tag ?
                tagContent(tag)
                :
                tagDeleted
            }
        </Layout>
    )

}

export { Tag }