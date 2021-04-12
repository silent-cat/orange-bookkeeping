import { useUpdate } from 'hooks/useUpdate'
import { createId } from 'lib/createId'
import { useEffect, useState } from 'react'
// const defaultTags = [
//     { id: createId(), name: '衣' },
//     { id: createId(), name: '食' },
//     { id: createId(), name: '住' },
//     { id: createId(), name: '行' },
// ]
// 自定义HOOK
const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>([])
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
        if (localTags.length === 0) {
            localTags = [
                { id: createId(), name: '餐饮' },
                { id: createId(), name: '交通' },
                { id: createId(), name: '购物' },
                { id: createId(), name: '住房' },
            ]
        }
        setTags(localTags)
    }, [])
    useUpdate(() => { window.localStorage.setItem('tags', JSON.stringify(tags)) }, tags)
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
    const findTagIndex = (id: number) => {
        let result = -1
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i
                break
            }
        }
        return result
    }
    const updateTag = (id: number, { name }: { name: string }) => {
        // const index = findTagIndex(id)
        // const tagsClone = JSON.parse(JSON.stringify(tags))
        // tagsClone.splice(index,1,{id:id,name:obj.name})
        // setTags(tagsClone)
        setTags(tags.map(tag => tag.id === id ? { id, name } : tag))

    }
    const deleteTag = (id: number) => {
        // const index = findTagIndex(id)
        // const tagsClone = JSON.parse(JSON.stringify(tags))
        // tagsClone.splice(index,1)
        // setTags(tagsClone)
        setTags(tags.filter(tag => tag.id !== id))
    }
    // 新增标签功能
    const addTag = () => {
        const tagName = window.prompt('请输入标签名称')
        if (tagName !== null && tagName !== '') {
            const { name } = tags.filter(t => t.name === tagName)[0] ||''
            if (tagName === name) {
                alert('该标签已存在,请重新输入')
                return
            }
            setTags([...tags, { id: createId(), name: tagName }])
        }
    }
    const getName = (id: number) => {
        const tag = tags.filter(t => t.id === id)[0]
        return tag ? tag.name : ''
    }
    return {
        tags,
        setTags,
        findTag,
        findTagIndex,
        updateTag,
        deleteTag,
        addTag,
        getName
    }
}

export { useTags }