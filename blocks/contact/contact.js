/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
export default function decorate($block) {
  const contacts = [];

  const $rows = Array.from($block.children);
  $rows.forEach(($row) => {
    // This will break if the block tables has less that 3 columns
    const $cells = Array.from($row.children);
    const $title = $cells[0];
    const $phone = $cells[1];
    const $text = $cells[2];

    const title = $title.textContent;
    const phone = $phone.innerHTML.replace('https://tel/', 'tel:');
    const text = $text.innerHTML;

    contacts.push({
      title, phone, text,
    });
  });

  $block.innerHTML = '';
  contacts.forEach((contact) => {
    const { title, phone, text } = contact;
    $block.innerHTML += `<div>contact block worked: t:${title} p:${phone} t:${text}`;
  });
}