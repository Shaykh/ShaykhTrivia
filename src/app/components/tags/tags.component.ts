import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TagService } from './../../services/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit, OnDestroy {

  tags: string[];
  tagSubscription: Subscription;

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagSubscription = this.tagService.tagSubject
      .subscribe(
        (tags: string[]) => {
          this.tags = tags;
        }
      );
    this.tagService.emitTags();
  }

  ngOnDestroy() {
    this.tagSubscription.unsubscribe();
  }
}
