"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[17139],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var A=t(96540);const r={},i=A.createContext(r);function s(e){const n=A.useContext(i);return A.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),A.createElement(i.Provider,{value:n},e.children)}},51257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>A,toc:()=>o});const A=JSON.parse('{"id":"user-manual/scenes/components/animation","title":"Animation","description":"The Animation component is deprecated. It has been replaced by the Anim component.","source":"@site/docs/user-manual/scenes/components/animation.md","sourceDirName":"user-manual/scenes/components","slug":"/user-manual/scenes/components/animation","permalink":"/user-manual/scenes/components/animation","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/components/animation.md","tags":[],"version":"current","frontMatter":{"title":"Animation"},"sidebar":"userManualSidebar","previous":{"title":"Anim","permalink":"/user-manual/scenes/components/anim"},"next":{"title":"Audio Listener","permalink":"/user-manual/scenes/components/audiolistener"}}');var r=t(74848),i=t(28453);const s={title:"Animation"},a=void 0,c={},o=[{value:"Properties",id:"properties",level:2},{value:"Scripting Interface",id:"scripting-interface",level:2}];function u(e){const n={a:"a",admonition:"admonition",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["The Animation component is deprecated. It has been replaced by the ",(0,r.jsx)(n.a,{href:"/user-manual/scenes/components/anim",children:"Anim"})," component."]})}),"\n",(0,r.jsx)(n.p,{children:"The Animation component enables an entity to specify which animations can be applied to the model assigned to its Model component."}),"\n",(0,r.jsx)(n.p,{children:"The Animation component can be enabled or disabled using the toggle in the top right of the component panel. If enabled, the component will play the assigned animation."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Animation component",src:t(68239).A+"",width:"628",height:"243"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Assets"}),(0,r.jsx)(n.td,{children:"The animation assets that can be utilized by this entity. Multiple animations can be assigned via the picker control."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Speed"}),(0,r.jsx)(n.td,{children:"A multiplier for animation playback speed. 0 will freeze animation playback, and 1 represents the normal playback speed of the asset."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Activate"}),(0,r.jsx)(n.td,{children:"If checked, the component will start playing the animation on load."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Loop"}),(0,r.jsx)(n.td,{children:"If checked, the animation will continue to loop back to the start on completion. Otherwise, the animation will come to a stop on its final frame."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"scripting-interface",children:"Scripting Interface"}),"\n",(0,r.jsxs)(n.p,{children:["You can control an Animation component's properties using a ",(0,r.jsx)(n.a,{href:"/user-manual/scenes/components/script",children:"script component"}),". The Animation component's scripting interface is ",(0,r.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.AnimationComponent.html",children:"here"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},68239:(e,n,t)=>{t.d(n,{A:()=>A});const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnQAAADzCAIAAACAIRzRAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABJ0AAASdAHeZh94AAAciElEQVR42u3dSUzUeaLAcfMy7/Dy8iaTzqQnnU5ndKZjhga3QUqQfRMXZBMRRDZFkEVAUVBsXEsbFaQaC0EpKBGQYimqCqiF6lPfTKYTM5e5GQ+T9KVv9GUOnfAOP/jzr38tFFIoUF/zOTS1QnXBl9/y/7MtJCISAAAE0DZeAgAAiCsAAMQVAADiCgAAiCsAAMQVAADiCgAAiCsAAMQVAADiCgAAiCsAAMQVAADi6lFB9J7Jw39zpoX2HoxU8dIDwBayKypmX1xiRGKqKvnQ2kUkpe6LS9wVFUNcV6A6ED557C/vTn82f/rPb9NDHx3gvQgAW8Hu6LiABNWb3dFxxNWr1Kg9zqwv/1OxbaHi9//O2jlwkHckAGxu36iiwhOSA1LQo615JT+cr/u5oem3pqbfmup+bij54fzR1jxxbXhC8jeqqI/xReXd6zNPG8zTBvP0o4sbMq6pUXt+zP3TL2c+X1T02fzpr/514qt3J3a8TQ+9dyCy4GD4PeaHAWDTljUiKQCTwMlVWZX/rGleaPao8p81yVVZquRDEYmp69bXGNXR7OSM7OS8igr1oMHhtDicFodTr2ksyMtOzshOPpqya4PENfbAvh9P/d9CxTY3f3h3dM+3ByLvpf55vmLbQvmffoxT7eVtCgCbTUDGrEdaTzb91uStrELTb01HWk+K8WvAv4qavsWUrqyv+RPHde+B/ZMnPlusafnvlH0t3OE8vGP+vLj28zcfFtfOf8wvLP6b/6nL9drpd4vXvJ90ubzrjbjP/D8eefhQupd0idsdPTxmZMj0e+m6d9Pun4OHf/M/dbk9u9c7yh7T9eneT3t8QdxeDQBB5fSdSZckDLeddr1B89PFq/prPN5xsj39Y62zJldlrVhWqa9i/LqJ1l8DHVeVaiDj88WOFn/xS+l/eRq/bluo2LZw/rN/pe7P+aBnefTTrwteW+gtk37HdeHXN52eQ+4e18n3shIuB+9D4uryRbn8kz2prOUuHSWuABr7vYy6pu7ku8dV0dHVxTUg66w+ZoM9zg+LewX8dUs+f6P+2goqClM+cVxLE76eF+0s+/yX4v9xqWnZF+/y/7D2srqly7WFrtfKYuN/XF3Gha7Nc42rS3c9jWuX7+57GC17FvkvBFJKpQun33v+wokrQFndh6T57cPKC2VxdRnXriKuu6JiArKDyf+yCmJ/U8CPzznbbVtxTlh/O/sTxzUnJvRd6e8Wzv7xlyLXNdeyL52xqtQD4TMn/rhw7vO3H17W5cC8+2mpbS5zpN7Su5q4LrfQ2+XyIv765qf3Xuao/Yzr0rMoR+HLX+ziI7vEVXZ74gowG+xhslfW18UlQ5e4yga1q4jrvrjEtce15Ifzq41ryQ/nVcmH9sUlBvbVS2+bWjGuTxs3woYmlWrg+J9cJ4H/713a/mMBevylmdj3k67/rYzr/K/zLkX0L67v37+TL3YuxuzXd+/dGyl/BG9rqP7FVfp1Ydr96/V8y/n5X10G2cQVCGZLBXVbYZXv2RHdXYrr5JTroHYVcQ3ImSLqfm5YbVzrfm4Q55cI7Kun+nbE4nBaHIM1URX3zeIFaX7qcFrMmoKo5h6H0+KYvn9uA8T13uGv/uO+wlr2xY/xqtgAPL5UwekQz1lavsHyXOv7ab/jOr0YbHkylx9K1kjXni2PYjtXHVdv93X/ZUL29S5vs3o3TVwB5oS9DrCWRmZikLoU177m5RFbX/Oq4hqQBVc/tzIptjWty7Lr4qs3dSdfvAhLcZ1sT1/8rUW+aP3x4qq6l/S3Nxlfv838+m3mX97mfLm4E9hDX790xqnWeGCrW4fcJ1Rd6ittOJr/adrPuC6F6tc304vFejftoZHKQXOnxznq9YurfMp6+VMlrgBx9TOu8gNRhtuagzeuUkGLUq4MyuI6eEtVJK4arIn66HG9mvLn/3jeD/zfv2TtepSw899nly+cz95Tuaan8zD7utQet9wuRs5t4+6KcXU59kbRP7e12OWUSvfyuC4b4Glh11nrhQWvByYBYFrY07Sw5yVY/6aFkz7ptHBigKeFQ/Lahpd+Nanpk8W1r3nptxa3leyPEddUz3GdPxH67YHIkIjIynipr7/75fi+0rU8nXJ3rseuuGXP8yYgH3F12SHsOuu71Ei3qnk7OHWdNjRJTzH5nrgCWP2GJumUCIoDeIJvQ5P0mjxtFDuHF+Nq7K5ffHEm27M+wXGuKpUmdeebzL+8Xfb1m7Q9V5dOzR8buedt8eLpmf6VtKZl10lfRZMC5j6m9HhcrK+4usy4dro30nVo66Hz7kevfsihOB4u9DDGdflkiCvAoTg1vi50i6tiu2zwHYoTEiH2MTmH206nt01JcV360N9jf9d/t7Crgtidv5SLNdevJtd2vn5vwzspQi4rkS5rn7IC+RXXpZAvfejSSC/Lq57mqP2Na8gqTyLhMoHs63xVAIKwr36cRMLlZH6y8zoF30kkpC9/uO108u0xKa7629mLcV3liQ8/UlyX540Ld2rW9pfmvPZDqsv8Px55jqv71OsKcRWPKTVM1kjXbbpeZnE9V9lnXD2uEHs7/aG3y4krwPywX6c/VAZDOkQnGE9/uLgsvbjIuhjXpSVYp+V54waMq6o384+Lq7BZa9zNBADYKLbGifuFiudOi8Np6b+VfK3f4hi8knGrx+F8ei37Sr/XbWKfOq6q/c5T/7tQsW2h4vfvUven8o4EgC3hG1VUQM4m4e+fnEtavz85t8JJmj7g3IcfY+SqOfbFQsW2heIdI/yBdADYWn3dGn8sfekkTQE79+HHWHMNiYhMVUXG8kYEgK0oIOuvPmyiPzP3seMKANjadkXF7ItLDMj5JcSZIvbFJa7DUTfEFQAA4goAAIgrAADEFQAA4goAAHEFAADEFQAA4goAAHEFAADEFQAA4goAAHEFAADEFQCAjxPXdf1TQQAABCHiCgAAcQUAgLgCAEBcAQAAcQUAgLgCAEBcAQAAcQUAgLgCAEBcAQAAcQUAgLgCAEBcAQAgrsB6Ctmv2hEatj0kFAA2nR2hYSH7VcQVG66sO/eGh0ZGh0XFAMCmExoZvXNv+Gr7SlyxvnaEhlFWAJu9rztCw4grNpDtIaF8ZwLY7LaHhBJXEFcAIK4grgBAXAHiCoC4ElcQVwAgriCuAEBcAeIKgLgSVxBXANhIcdXq9BaHU92hoR8grgCIawDiWlZbb5yxWhxOg8mSUVC0rj+dMwqKDCZLQ0sroSKuALCV46ru0IjgGWes65094kpcAWDrx1XUTqvTJ2Xm6EcN+lFDUmaO+4yxoNXp3ce7FofTOGMtq62XrhIP5X6VukMjPZQ0SpZf6P7sIK4AsPniKgason/qDo0ik1qdXh48rU4v+irKKg1Ay2rrx8zT4o7iKmn5VnFLxchVDJqluWh1h4a+EldsIrsOxqafOl1SXZt/rmJ/YorvG8ceST9TWZVXVh6ekOx+7Z6Y+KzC4uKqmpSsEz4eJPF4VvGFmjOVVbFH0nn9sXHjKs+nKJ/URTEA9bjLqaGl1dsCrRRg+Y0VTyHF1f3GIK7YRA5l5w68NlgczokZ69naet83Lq+7ZJy1vTSMp53Ic782KvWwVjdgts9du6PeExPv8RFUSant3T0Wh9Nsn2tRP/B2s4BISM+8fu/+DfV3vmMP4up1K5M8n1qdXjGUtDic7kukopHuo0yPS6oZBUXDE1NiXKu4QUNLK7uUiSs+iUdPuw0mi8FkOd9w+YOHrdVXmoyzNrGs87BL63vwuva45hSVjhhN4ul0w6+TMrLX7/XJKiwenTKPmafzz1XwbiGuH7KVST4AVcziKtZWFaNMaTlWmkyW31hBPKZ7fcUlrLkSV3xkXX394vuu5mrzhz1CZEqapveFGEdaHM7hyanMwmLFbfbGJuQUlYpZ3PP1l93jGn8so+hCdVZhceyRdN9x3RMTf/3ufbN9TjDO2i5cvrrrYKxi0rjoQvXRk/mKy/fFJeaWnC0or1Alpbo/ckrWieKqmoyCM7uj43zHNTIl7fT5CzlFpXtjE3gLEVdfW5k8htBj5KStTx4jLfq64mZgHzfwtqMKxBUbM66nzp43mCxTNsf9J5oRo8lkn7t2Ry31aXd03Lm6huHJqcVfwWdtL14Nm2wOKa7xxzIePe022RziBoNjE8OTUz7imng8q29oxOJwdva+eD44ZHE4O3ueS7FMPJ7V3t0jMm9xOCdnrE237+5PTNkdHVfR0Dg6ZZZ+vvUODkm/BBwvOPNs4KV0r1fjk2cv1v89Punmd4+kCy0OZ//I6OHcUy3qB9Iw3Wyfe9iljT+WwRuJuHpYN/U45eu+rUl+lY/uNrS0ikD6WEb1XV8fS7kgrthQcd0Xl3ir7bHZPjc4NpF9puTR026Lw/ni1XDi8SxxgzOVVWPmaYvDaTBPd/X1D00YxdOJuB5IPvRY+0xUSjf8+tnAS6PVLj70GNddB2MrLjUaZ20TM9ZzdQ2NrbdNNseoyZJXVh4WFROekKzu6DTb5yZmrN8/7+seeDlltU9Z7XXXbuSWnH1tNJntcwOvDe3dPeLTEJ9nen7hS8O4xeF8PWXu7HmuHx0z2+fGp2fL6y7VX7/x0jAuhsjDk1MPu7RXbt4xWu0mm6NHP6jpfTFumbE4nA86v/e4OQtBHVfF8qqif+oOjaKU8pGrfI+xosdiZljeV61OL62qKvZMybdTMXIlrthEcRVbmcz2ubuPn4QnJJ+vvzw5a5ucsZ672CB2HnU86xUZS83OFZfcffzEbJ8TcT1TWTU+PTtltV+60SpSmldWPjRh9BZXaStTj34w7ujx9PxCceNvH7TtjU2ITjv6bOClyea4dKNVTAhnFRZfv3s/9kh65aUrRqu9f2RUVH9/YsqlGzdLqmv3J6bcf6Ix2+ee6gbEAPTv8UmtDx6a7HPd/fqYw8fk08J7YxPuPOoQo1VRU7Hd6XjBGd5IxFXJx04irU5vnLFWNzaV1dbLp46lZOafq5Qfn+rjOFdxr/xzlfLhr7T9If9cpfyWlJW4Yv3UXG32uAwkN2qyHMrO9WcrU23TNaPVPmaZKayoErOyL14NWxzO9u4eVVJq2om8l4bxKZuj7toNaflT2tB05GT+tTtqs33uxavhhPRMfzY0nSgue200mWyOqzfv7I6OC09IftD5vcXhHHhtOJSduz8xRXxotNq/f6Gru9YiPWxeWfmoySKmfG8/ahelFL8ciKFq98BLdUfnvfbOe+2dHc96jbO20SnzieIyeVx3HYytv35jymoXn/O1O+pjeQWKZV0QV4C4Etc1xTUq9fD3z/ssDqd+dKzy8pXS6otnL9Z39r6wOJwjRlNOUWlmYfFro2lixlpafdF9t/DRvIK7j59YHE5N74sDyYdWjOuemPgW9QOzfW7MMnP525ul1RfLauputT2esjmMs7bqK027DsamZud29jyXFkpNNsd3mq7otKN7YxOqrzSNygYJQxPGkqrarMJiaeOxwvj07JnKKsWGpsiUtNbvHkprrmIMfSyvgPcVcQWIK3ENTFzFViaPj2C2z12/e/94QeGr8UnjrK2iodE9rkdO5n/7oM1sn+vu1x88dGTFuEpbmTzS9L6ITEmTDk6tudrc9UI3ZbWbbI6m23fFBqu9sQl5ZeU32x6JNVf96FhJVe2r8Umzfa5HP6ju0Mi1Pnh4OPeUx93CqqTUstq6tu+fijXXjme9Hrcfg7gCxJU119WtuUpbmUw2x+DYhH50THhpGJ+YnhXrrBmnz3T36+UHv+46GHux+fqU1S7WXMXuJIN5uqC8Qjom5/ngkHtcpa1MYm+R9HT60TGxB1hsa8opKi0or5RSKrb7PnraHXcso7zuUtzR4+LR0k+dHpowjllmztbWicH3k57nUamHxbXhCcl5ZeUi1Yq4pmSdOHuxXtq+JH5RGHhtSM7M4b1EXAHiirXGNS3npH50TFpedV+INc7aKi9fuXSjVQwf27t7Lly+evthu0iviGtSRrYYjA5NGJtu3b3YfL13cMjjbmFpb5RYXlUuxE6Zzfa5h99r+0dGp6z29u6eyktXGlq+Fdudbj9sv3rr7pTN8Wp8svn2vXN1DQ+7tCabY3hyKvN00bm6hvHpWbN97tnAy9qm67VN13v0g1M2x7U76r2xCSLDRqv99sP21gdtmt4+s32u5+Wri80tlZev9OgHLQ6n2PrEe4m4AsQVa4qrNACdnLWdr7/s7WyI7d09CemZ6g6NSXa06JTVLsU1LCqmoLxCOj5HZNVkc7jHNbfkrCjoze8eKU7dIG0h1o+O3X+iEY8v6RsaOZJ7KquwuH9kVH650Wq/cvP23tiEvbEJDS2tE67nvRmaMBZdqN51MDYq9bA4RYbF4Zyctak7NKOuM+GjU+biCzW8kYgrQFwRgLgePZlfWn0x/1xFhNty4+7ouMzTRaXVF8XZ+XdHx+Wfq7jV9vju4yfVV5rTck4WXaiWn7g/9kj6pRs377V3fnu/LaeoNKeotKSqNtV1eBp/LKO4qqboQrXHM/WnZueWVNWeqayKTjuadiKv6dbde+2ddx8/qbx8RToXY3hCcllN3e2H7eqOzhvq74667kJKPJ519eYdca+KS43SBquwqJi4o8ebbt+91/6kqrFpf2JKzOFjtU3X7z5+cq+9s7H1Fn85gLgCxBVKzXfuaXpfaHpfcO5cEFfiCuIKAMQVxBUAiCtAXAEQV+IK4goAxBXEFQCIK0BcARBXgLgCAHEFcQUA4griCgDEFViTHaFhoZHRfGcC2LxCI6N3hIYRV2wgIftVO/eG01cAm7esO/eGh+xXEVdsuL7uCA3bHhIKAJvOjtCw1ZaVuAIAEHjEFQAA4goAAHEFAIC4AgAA4goAAHEFAIC4AgAA4goAAHHFlrQ7Oi5EFRUSEYkVqKJ2R8fxhgGIK7ByWcM4sbD/IqPpK0BcgRWEqKJI5qqEqKJ42wDEFfAZ14hIerm6uEZE8rYBiCtAXIkrgvFb23/EFSCuxBXw61u7sKHRH8QVIK7EFSCuxBXElbgCxJW4griCuIK4EleAuBJXgLgSVxBX4goQV+IK4griCuIa7HHV6vQWh1Oi7tB8qs9e3aHRjxqSMnN4o2/2uOaWnNUNv+4fGT146Ahx5W0D4hpccc0oKDKYLPKeldXWG2esBpMlo6CIuOID4nog+VBXX7/BZBl4bSCuAYkrfwIBH4f/cd34PnFcG1pajTPWstr6DfKDm7hujZFrRFJqWFRMzdVm4hqouDK7jo/wRvU/rkE4XbRttTHzHVetTq/V6dUdGmnSWKvTuxc6INc2tLQS16205kpciSuIa5DGNSkzRz9qEGHzsRwrRVFMGssbqdXp5XPIWp1eXkff14pmS08tnou4ElfiSlxBXDd3XFccXIqRq7eZ5LLa+jHztHzgK2oteun7WrHcq9g8xciVuBJX4griukXiqtjfpBhNKuIqj6LHFqo7NOIuvq91Ty9xJa7ElbiCuG7BuLrP5fqOq+IYHokIpO9rPe6lIq7ElbgSVxDXrRlXefY+YOTqZymJK3ElrsQVxHVrxrWstr6qscnHFmLfa66+j+TxfS1rrsSVuHKcKzjOdQse5yptFZbnU2xuki7xZ7ewvKBltfXDE1Py7cE+rlXsFhYfElfiSlwBztC06U9/KHopXxOVH5YjRq7y7cTuJ0eUX2ucsVY1NsnP7uT/teKAWuLKuYWJK0Bct/iJ+92nhcF3IL0kriCuxJW4grgSV4C4ElcQV+IKENctHFeAuBJXEFfiSlxBXIkrQFyJK4grcQWIK3EFcQVxxdb71v6Ep2ggruA7kLgSV4C4AsSVuAIgrtjQcVVF0cvVxVUVxdsGIK6AL7uj48Iio0mmvyKjd0fH8bYBiCuwcl9DVFH8CZGVqaIoK0BcAQAAcQUAgLgCAEBcAQAgrrwKAAAQVwAAiCsAAMQVAAAQVwAAiCsAAMQVAAAQVwAAiCsAAMQVAAAQVwAAiCsAAMQVWGJxONeCFxAAcQWIKwAQVxBXACCuIK4AQFxBXIkrAOLqH61Ob3E41R2aD36EhpZWi8PZ0NLK/wbiKphsjnHLDHEFEKRxLautN85YLQ6nwWTJKCjy814ZBUUGk0WqqYjrWvIsHmRVnwM2bFxNNsfV1luHMrIGDePEFUAwxlXdoRGZNM5Y/R96KuIaEMR1a8RVlPWvYbu3h4SmpGdIfeUFBBAscRWN1Or0SZk5+lGDftSQlJnjcdJY0Or0osfSJSKHZbX1Y+bpstp6dYfGOGMtq633NmksDZQFcaF4dsWzSO2XLl/jyBgfIa7ysm4PCc0tKhkzTxNXAMEVVzFgFS1076KiuOJDUT7FyFWKq/w28gcRl4iyyu8l/1AxcvXx7NgIcR0anzxTXjEwMupPWYkrgCCKq1anl+oleikfHYoZY4/ztN7i6n4vRUHdPwGpl4q4us8SZxQUDU9MKYbF+CRxHRqfPJyVsz0kND7tSN+r4RXLSlwBBEtcRfbkNdXq9PKeycvnf1wVkZb3W5oilqZ5fcTV47NrdXomhzdCXNs0Xd+ER4iOxqcd6dUP+i4rcQUQLHF1H5jKR5m+p2F9xFUeVEVoFZuKxXqqx7gqVmHlmBneCHE12+ceyvq6c88+32UlrgCCIq4iex7rJQ00P2zkKv9Q0W/FKNb3tLCPZ8dGWHNV9NV3WYkrgKCIq7fTPsi3NX3Ymqs07nzxalgx9l1VXH08OzbIbmFFX32UlbgCCIq4KpZXFdUUM7eikYqpWnGVYr5XEVdpylex/VgxLSw+lMdVfnvFs4sbeDxYCJ/2UJzHXdpvwiN8l5W4AgiKuPo4bFSr08sjJz/SVKvT55+rVFyu7tC4x1XU172F8g1NYtgqxVVaZ/X27AaTRRztw//sDRVXi8OpGxrxXVbiCiCIDsUBAhJXTtwPgLgCxBUAiCuIKwAQVxBX4gqAuAIAAOIKAABxBQCAuAIAQFwBAABxBQCAuAIAQFwBAABxBQCAuAIAQFwBAABxBQCAuAIAQFwBAABxBQCAuAIAQFwBACCuAACAuAIAQFwBACCuAACAuAIAQFwBACCuAACAuOKTsTica8ELCIC4AsQVAIgriCsAEFcQVwAgriCuxBUAcfWurLbeOGNtaGnlhcN6xNVkc4xbZogrAOIKBCauJpvjauutQxlZg4Zx4gqAuAJrjaso61/Ddm8PCU1Jz5D6ygsIgLge0ur00o9LrU6vuFbdoZGu1Y8akjJz5HfU6vTyG7jfHVs1rvKybg8JzS0qGTNPE1cAxPVQUmaOftQgJTOjoMhgssgLqtXpDSZLRkGRdGPpQ6nKUlDFE9HXrRfXofHJM+UVAyOj/pSVuAII9riqOzTyWCpu3NDSapyxltXWS9eK+qo7NPKRq/wB3e+CzR7XofHJw1k520NC49OO9L0aXrGsxBVAsMfVvY7yC9UdGsU8sOJC97sr6ostENc2Tdc34RGio/FpR3r1g77LSlwBBHVcxTSvx7iKfEr/4W2wS1yDIa5m+9xDWV937tnnu6zEFQAjV0auWHnNVdFX32UlrgBYc2XNFX7tFlb01UdZiSsAdguzWxirOBTncZf2m/AI32UlrgCCKK6KH3/ujRTcZ3R9HMYqRq4NLa0+7o6tFFeLw6kbGvFdVuIKICjiun48Ltlia8eVE/cDIK7EFcQVAIgriCsABHNcQVyJKwDiCgAAiCsAAMQVAADiCgAAiCsAAMQVAADiCgAAcQUAAMQVAADiCgAAcQUAAMQVAIBP4v8B1/ydWrRiKPkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMjJUMTc6MjQ6MjQrMDA6MDBJQjMaAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTIyVDE3OjI0OjI0KzAwOjAwOB+LpgAAAABJRU5ErkJggg=="}}]);