import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head></Head>
      <main>

        <h1>Alt Icons</h1>

        <div className='icon_sm'>
          <div className='fa fa-sign fa-8x'/>
          <div className='fad fa-sign fa-8x'/>
          <div className='far fa-laptop-house fa-8x'/>
          <div className='fal fa-laptop-house fa-8x'/>
          <div className='fad fa-laptop-house fa-8x'/>
          <div className='fad fa-thumbtack fa-8x'/>
          <div className='fad fa-copyright fa-8x'/>
          <div className='fad fa-stream fa-8x'/>
          <div className='fad fa-industry-alt fa-8x'/>
          <div className='fad fa-mind-share fa-8x'/>
          <div className='fad fa-lamp-desk fa-8x'/>
          <div className='fad fa-coffee-pot fa-8x'/>
          <div className='fad fa-industry fa-8x'/>
          <div className='fad fa-analytics fa-8x'/>
          <div className='fad fa-search fa-8x'/>
          <div className='fad fa-search-location fa-8x'/>
          <div className='fad fa-raygun fa-8x'/>
          <div className='fad fa-rocket-launch fa-8x'/>
          <div className='fad fa-rocket fa-8x'/>
          <div className='fad fa-sync fa-8x'/>
          <div className='fad fa-sync-alt fa-8x'/>
          <div className='fad fa-redo-alt fa-8x'/>
          <div className='fad fa-recycle fa-8x'/>
          <div className='fad fa-cog fa-8x'/>
          <div className='fad fa-cogs fa-8x'/>
          <div className='fad fa-brackets-curly fa-8x'/>
          <div className='fad fa-smile-wink fa-8x'/>
          <div className='fad fa-sad-tear fa-8x'/>
          <div className='fad fa-dumpster-fire fa-8x'/>
          <div className='fad fa-car-crash fa-8x'/>
          <div className='fad fa-box-check fa-8x'/>
          <div className='fad fa-box-open fa-8x'/>
          <div className='fad fa-box-full fa-8x'/>
          <div className='fad fa-glasses fa-8x'/>
          <div className='fad fa-thumbs-down fa-8x'/>
          <div className='fad fa-toggle-on fa-8x'/>
          <div className='fad fa-trophy-alt fa-8x'/>
          <div className='fad fa-user fa-8x'/>
          <div className='fad fa-sliders-v-square fa-8x'/>
          <div className='fad fa-share-square fa-8x'/>
          <div className='fad fa-sign-in-alt fa-8x'/>
          <div className='fad fa-home fa-8x'/>
          <div className='fad fa-heart fa-8x'/>
          <div className='fa fa-heart fa-8x'/>
          <div className='far fa-heart fa-8x'/>
          <div className='fad fa-satellite fa-8x'/>
          <div className='fad fa-satellite-dish fa-8x'/>
          <div className='fad fa-lightbulb-exclamation fa-8x'/>
        </div>

      </main>

      <style jsx>
        {`
          .icon_sm {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            font-size: 8px;
          }
          .icon_sm > div {
            padding: 10px;
          }
        `}
      </style>
    </div>
  )
}