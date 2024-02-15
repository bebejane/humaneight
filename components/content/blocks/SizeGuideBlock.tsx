import s from './SizeGuideBlock.module.scss'
import cn from 'classnames'
import { Image } from 'react-datocms'

type Props = {
  data: SizeGuideBlockRecord
  className?: string
}

type SizeTable = {
  columns: string[]
  data: { [key: string]: string }[]
}

export default function SizeGuideBlock({ data: { id, image, table }, className }: Props) {

  const tableData: SizeTable = table

  return (
    <div className={s.sizeGuide}>
      {image &&
        <figure>
          <img src={image.url} className={s.image} />
        </figure>
      }
      {tableData &&
        <table className="small">
          <tbody>
            <tr>
              {tableData.columns.map((column, idx) => <th key={idx}>{column}</th>)}
            </tr>
            {tableData.data.map((row, idx) =>
              <tr key={idx}>
                {tableData.columns.map((column, idx) => <td key={idx}>{row[column]}</td>)}
              </tr>
            )}
          </tbody>
        </table>
      }
    </div>
  )
}