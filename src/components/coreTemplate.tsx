import {type ReactNode} from "react";
import Head from "~/components/Head";
import Hero from "~/components/Hero";

type PropTypes = {
  title: string,
  children: ReactNode,
}

const CoreTemplate = ({title, children}: PropTypes) => (
  <>
    <Head title={title}/>
    <main>
      <Hero/>
      <div className="container mx-auto max-w-5xl">
        {children}
      </div>
    </main>
  </>
)

export default CoreTemplate
