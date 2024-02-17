'use client'

import DisplayComponent from "@/components/DisplayComponent"

export default function ComponentsPage() {
  const colors = ['bg-sugar','bg-tangerine','bg-peach','bg-burnt','bg-grey','bg-pop','bg-forest','bg-olivine','bg-violet']

  return (
    <div className="py-10 flex flex-col items-center divide-y gap-y-12 divide-burnt">
      <DisplayComponent name="Colors">
        <div className="flex justify-center flex-wrap gap-8 justify-items-center [&>*]:w-fit [&>*]:flex [&>*]:flex-col [&>*]:items-center w-fit">
          {
            colors.map((color, index) => {
              const title = color.substring(3).charAt(0).toUpperCase() + color.substring(3).slice(1)

              return (
              <div key={index}>
                <h4>{title}</h4>
                <div
                  className={`w-10 aspect-square rounded-full ${color}`}
                />
              </div>
            )})
          }
        </div>
      </DisplayComponent>

      <DisplayComponent name="Fonts">
        <div className="space-y-5 text-2xl">
          <p className="font-nunito">Nunito</p>
          <p className="font-croissant">Croissant One</p>
        </div>
      </DisplayComponent>
    </div>
  )
}