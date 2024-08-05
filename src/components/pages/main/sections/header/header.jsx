import './header.css';

export function Header() {
  return (
    <section className='flex main_page_header'>
      <article className='flex main_page_header_inner'>
        <div className='flex back'>반응형 헤더임</div>
        <div className='flex hd_txt'>메인헤더 텍스트임</div>
      </article>
    </section>
  );
}
