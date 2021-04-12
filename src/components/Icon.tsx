import classnames from 'classnames'
// 遍历icons文件夹下的svg并自动引入
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try { importAll(require.context('icons', true, /\.svg$/)); } catch (error) { console.log(error); }

type Props = {
    name?: String
} & React.SVGAttributes<SVGElement>
const Icon = (props: Props) => {
    const {name,children,className,...rest} = props

    return (
        <svg className={classnames('icon',className)} {...rest}>
            <use xlinkHref={name && '#' + name}></use>
        </svg>
    )
};

export default Icon
