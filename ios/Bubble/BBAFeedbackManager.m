//
//  BBAFeedbackManager.m
//  Bubble
//
//  Created by llun on 25/9/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "BBAFeedbackManager.h"

@implementation BBAFeedbackManager

-(id) init {
  self = [super init];
  if (self) {
    impactFeedback = [UIImpactFeedbackGenerator new];
    selectorFeedback = [UISelectionFeedbackGenerator new];
    notificationFeedback = [UINotificationFeedbackGenerator new];
  }
  return self;
}

RCT_EXPORT_MODULE(FeedbackManager)
RCT_EXPORT_METHOD(prepareImpact) {
  [impactFeedback performSelectorOnMainThread:@selector(prepare) withObject:nil waitUntilDone:YES];
}

RCT_EXPORT_METHOD(impact) {
  [impactFeedback performSelectorOnMainThread:@selector(impactOccurred) withObject:nil waitUntilDone:YES];
}

RCT_EXPORT_METHOD(prepareSelect) {
  [selectorFeedback performSelectorOnMainThread:@selector(prepare) withObject:nil waitUntilDone:YES];
}

RCT_EXPORT_METHOD(select) {
  [selectorFeedback performSelectorOnMainThread:@selector(selectionChanged) withObject:nil waitUntilDone:YES];
}

RCT_EXPORT_METHOD(prepareNotify) {
  [notificationFeedback performSelectorOnMainThread:@selector(prepare) withObject:nil waitUntilDone:YES];
}

RCT_EXPORT_METHOD(notifyWithFeedback:(NSInteger) feedback) {
  [self performSelectorOnMainThread:@selector(internalNotifyWithFeedback:)
                         withObject:[NSNumber numberWithInteger:feedback] waitUntilDone:YES];
}

-(void)internalNotifyWithFeedback:(NSNumber *)feedback {
  [notificationFeedback notificationOccurred:feedback.integerValue];
}

@end
