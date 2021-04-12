import styled from 'styled-components'
import Layout from 'components/Layout'
import Icon from 'components/Icon'
import Button from 'components/Button'
import { useTags } from 'hooks/useTags'
import { Link } from 'react-router-dom'


const TagsList = styled.ol`
font-size:16px;
background-color: #fff;
    >li{
        border-bottom:1px solid #d5d5d5;
     
        >a{
            padding: 12px 16px;
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
    }
`



const Tags = function Tags() {
    const { tags,addTag } = useTags()
    return (
        <Layout>
            <TagsList>
                {tags.map(tag =>
                    <li key={tag.id}>
                        <Link to={`/tags/${tag.id}`}>
                            <span className="ellipsis">{tag.id}:{tag.name}</span>
                            <Icon name="right" />
                        </Link>
                    </li>
                )}
            </TagsList>
            <Button onClick={addTag}>新增标签</Button>
        </Layout>
    )
}

export default Tags