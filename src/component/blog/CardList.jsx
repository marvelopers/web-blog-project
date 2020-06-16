import React from 'react';

function CardList() {
  return (
    <section id="list" class="list">
      <div class="list__container">
        <label><span>CONTENTS</span></label>
        <ul id="categoryList" class="list__categories">
          <li data-filter="All" class="category__item active">All</li>
          <li data-filter="Front" class="category__item">Front-end</li>
          <li data-filter="Back" class="category__item">Back-end</li>
          <li data-filter="Marketing" class="category__item">Marketing</li>
          <li data-filter="Thought" class="category__item">Thought</li>
        </ul>
        <div class="list__contents">
        </div>
      </div>
    </section>
  );
}

export default CardList;