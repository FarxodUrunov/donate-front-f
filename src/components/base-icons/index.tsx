import icons from "@/utils/icons"

interface IconsProps{
    name: keyof typeof icons;
    viewBox: string;
    class: string;
    width: string;
    height: string;
}

const BaseIcons = (props: IconsProps) => {
    
  return (
    <>
          <svg
              className={props.class}
              viewBox={props.viewBox}
              width={props.width}
              height={props.height}
              xmlns="http://www.w3.org/2000/svg"
              dangerouslySetInnerHTML={{ __html: icons[props.name] }}
            ></svg > 
    </>
  )
}
export default BaseIcons
