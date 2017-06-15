//
//  XHBSecondViewController.m
//  XHBAPP
//
//  Created by zhudong on 2017/6/6.
//  Copyright © 2017年 zhudong. All rights reserved.
//

#import "XHBSecondViewController.h"

@interface XHBSecondViewController ()

@end

@implementation XHBSecondViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    UITextView *textV = [[UITextView alloc] initWithFrame:self.view.bounds];
    textV.text = [NSString stringWithFormat:@"%@", self.dict];
    [self.view addSubview:textV];
}

@end
