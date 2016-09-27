//
//  BBAFeedbackGenerator.m
//  Bubble
//
//  Created by llun on 27/9/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "BBAFeedbackGenerator.h"

@implementation BBAFeedbackGenerator

RCT_EXPORT_MODULE(FeedbackGenerator)
RCT_EXPORT_METHOD(generate:(FeedbackType)feedback withStyle:(FeedbackStyle)style)
{
  switch (feedback) {
    case kImpactFeedback:
      [self performSelectorOnMainThread:@selector(generateImpactFeedbackWithStyle:)
                             withObject:[NSNumber numberWithInteger:style]
                          waitUntilDone:YES];
      break;
    case kSelectFeedback:
      [self performSelectorOnMainThread:@selector(generateSelectFeedback)
                             withObject:nil
                          waitUntilDone:YES];
      break;
    case kNotifyFeedback:
      [self performSelectorOnMainThread:@selector(generateNotifyFeedbackWithStyle:)
                             withObject:[NSNumber numberWithInteger:style]
                          waitUntilDone:YES];
      break;
    default:
      NSLog(@"Unsupported feedback");
  }
}

RCT_EXPORT_METHOD(generateImpactFeedbackWithStyle:(FeedbackStyle) style)
{
  UIImpactFeedbackStyle impactFeedbackStyle = UIImpactFeedbackStyleMedium;
  switch (style) {
    case kStrongFeedback:
      impactFeedbackStyle = UIImpactFeedbackStyleHeavy;
      break;
    case kLightFeedback:
      impactFeedbackStyle = UIImpactFeedbackStyleLight;
      break;
    default:
      // Use default impact style
      break;
  }
  NSString *key = [NSString stringWithFormat:@"impact-%ld", impactFeedbackStyle];
  UIImpactFeedbackGenerator *feedbackGenerator = (UIImpactFeedbackGenerator *)feedbacks[key];
  if (feedbackGenerator == nil) {
    feedbackGenerator = [[UIImpactFeedbackGenerator alloc] initWithStyle:impactFeedbackStyle];
    feedbacks[key] = feedbackGenerator;
  }
  [feedbackGenerator impactOccurred];
}

RCT_EXPORT_METHOD(generateSelectFeedback)
{
  NSString *key = [NSString stringWithFormat:@"select"];
  UISelectionFeedbackGenerator *feedbackGenerator = (UISelectionFeedbackGenerator *)feedbacks[key];
  if (feedbackGenerator == nil) {
    feedbackGenerator = [[UISelectionFeedbackGenerator alloc] init];
    feedbacks[key] = feedbackGenerator;
  }
  [feedbackGenerator selectionChanged];
}

RCT_EXPORT_METHOD(generateNotifyFeedbackWithStyle:(FeedbackStyle) style)
{
  NSString *key = [NSString stringWithFormat:@"notify"];
  UINotificationFeedbackGenerator *feedbackGenerator = (UINotificationFeedbackGenerator *)feedbacks[key];
  if (feedbackGenerator == nil) {
    feedbackGenerator = [[UINotificationFeedbackGenerator alloc] init];
    feedbacks[key] = feedbackGenerator;
  }
  UINotificationFeedbackType type = UINotificationFeedbackTypeSuccess;
  switch (style) {
    case kWarningFeedback:
      type = UINotificationFeedbackTypeWarning;
      break;
    case kErrorFeedback:
      type = UINotificationFeedbackTypeError;
      break;
    default:
      break;
  }
  [feedbackGenerator notificationOccurred:type];
}

@end
